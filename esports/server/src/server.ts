import express from 'express'
import { PrismaClient } from "@prisma/client";
import { convertHourToMinutes } from './utils/convert-hour-to-minutes';
import { convertMinutesToHour } from './utils/convert-minutes-to-hour';
import cors from "cors";

const app = express()
const prisma = new PrismaClient()

app.use(express.json())
app.use(cors())

// rotas da aplicação - HTTP methods / API Restful / HTTP Codes
app.get('/games', async (request, response) => {
    
    const games = await prisma.game.findMany({
        include: {
            _count: {
                select: {
                    ads: true,
                }
            }
        }
    })
    return response.json(games)
})

app.post('/games/:id/ads', async (request, response) => {
    
    const gameId = request.params.id;
    const body = request.body;

    const ad = await prisma.ads.create({
        data: {
            gameId
            ,name: body.name
            ,yearsPlaying: body.yearsPlaying
            ,discord: body.discord
            ,weekDays: body.weekDays.join(',')
            ,hourStart: convertHourToMinutes(body.hourStart)
            ,hourEnd: convertHourToMinutes(body.hourEnd)
            ,useVoiceChannel: body.useVoiceChannel        
        }
    })
    
    return response.status(201).json(ad)
})

app.get('/games/:id/ads', async (request, response) => {
    
    const gameId = request.params.id;
    
    const ad = await prisma.ads.findMany({
        select: {
          id: true
          ,gameId: true
          ,name: true
          ,yearsPlaying: true
          ,weekDays: true
          ,hourStart: true
          ,hourEnd: true
          ,useVoiceChannel: true
        },
        where: {
            gameId: gameId,
        },
        orderBy: {
            createdAt: 'asc'
        }
    })

    return response.json(ad.map(ads => {
        return {
            ...ads,
            weekDays: ads.weekDays.split(','),
            hourStart: convertMinutesToHour(ads.hourStart),
            hourEnd: convertMinutesToHour(ads.hourEnd)
        }
    }))
})

app.get('/ads/:id/discord', async (request, response) => {
    
    const adId = request.params.id;

    const ad = await prisma.ads.findUniqueOrThrow({
        select: {
            discord: true,
        },
        where: {
            id: adId,
        }
    })
    
    return response.json({
        discord: ad.discord
    })
})

app.listen(3334)