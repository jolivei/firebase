export interface Productos {
    id?:string;
    nombreplato: string;
    precio?:number;
    creado?:Date;
    modificado?:Date;
    disponible?: boolean;
    eliminar?: boolean;
    tipo?: string;
    categoria?: string;
    descripcion?: string;
    foto?: string



}
