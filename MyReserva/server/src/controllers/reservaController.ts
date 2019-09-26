import { Request , Response } from 'express';
import pool from '../database';

class ReservasController{


   public async list ( req:Request ,res:Response){
 const reserva=await pool.query('select * from restaurantes')
   res.json(reserva);
   }

   public async getOne ( req:Request ,res:Response):Promise <any>{
      const {id} = req.params;
      const reserva=await pool.query('SELECT * from restaurantes where id=?', [id]);
      if(reserva.length>0){
          return res.json(reserva[0]);
       }
 res.status(404).json({text:"The reserva doesn't"})
         }

   public async create ( req:Request ,res:Response): Promise<void> {
     await pool.query('INSERT INTO restaurantes set ?', [req.body]);
       res.json({message:'reserva saved '});
    }

   public async delete ( req:Request ,res:Response){
       const {id} = req.params;
       await pool.query('DELETE from restaurantes where id= ?', [id]);
   res.json({message:'delete reserva '+id});
}

   public async update ( req:Request ,res:Response){
       const {id} = req.params;
       await pool.query('Update restaurantes set ?  where id= ?', [req.body,id]);
         res.json({text:'actualiza a reserva ' + id });
    }


}

const reservaController=new ReservasController();
export default reservaController;
