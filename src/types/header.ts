export interface HeaderProps{
    title:"Usuários"| "Detalhes";
    search: (q:string) => void;
    entrySearch:string;
}