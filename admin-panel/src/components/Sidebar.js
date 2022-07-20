import SidebarItem from "./SidebarItem"
import itensDashboard from "../data/itensDashboard.json"
import itensGerenciar from "../data/itensGerenciar.json"
import itensSubmissoes from '../data/itensSubmissoes.json'

export default function Sidebar(){
    return (
        <div className="sidebar">
          <div className="logo" />
          <p className="sidebar-title">Menu Principal</p>
          { itensDashboard.map((item, index) => <SidebarItem key={index} item={item} />) }
          <p className="sidebar-title">Gerenciar</p>
          { itensGerenciar.map((item, index) => <SidebarItem key={index} item={item} />) }
          <p className="sidebar-title">Submissoes</p>
          { itensSubmissoes.map((item, index) => <SidebarItem key={index} item={item} />) }
        </div>
    )
}