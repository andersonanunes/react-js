import { View, TouchableOpacity, Text } from "react-native";
import { GameController } from "phosphor-react-native";

import { THEME } from "../../theme";
import { styles } from "./styles";

import { DuoInfo } from "../DuoInfo";


export interface DuoCardProps {
    "id": string,
    "name": string,
    "yearsPlaying": number,
    "weekDays": string[],
    "hourStart": string,
    "hourEnd": string,
    "useVoiceChannel": boolean
}

interface Props {
    data: DuoCardProps;
    onConnect: () => void;
}

export function DuoCard({ data, onConnect }: Props) {
    return(
        <View style={styles.container}>
            <DuoInfo 
                label="Nome"
                value={data.name}
            />

            <DuoInfo 
                label="Tempo de Jogo"
                value={`${data.yearsPlaying} ano(s)`}
            />

            <DuoInfo 
                label="Disponibilidade"
                value={`${data.weekDays.length} dia(s) \u2022 ${data.hourStart} - ${data.hourEnd}`}
            />

            <DuoInfo 
                label="Chamada de áudio?"
                value={data.useVoiceChannel ? "Sim" : "Não"}
                colorValue={data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT }
            />

            <TouchableOpacity
                style={styles.button}
                onPress={onConnect}
            >
                <GameController 
                    color={THEME.COLORS.TEXT}
                    size={20}
                />

                <Text style={styles.buttonTitle}>
                    Conectar
                </Text>
            </TouchableOpacity>

        </View>
    );
}