import {Router, Request, Response} from 'express'
import { ContactController } from '../controllers/ContactController'
import { Contact } from '../model/ContactModel'

export class ContactRouter{

    controller = new ContactController()
    
    
    public getRoutes(): Router {

     const router: Router = Router()

     router.get('/', (req: Request, res: Response) => {
         this.controller.getContact(req, res)
     })

     router.post('/', (req: Request, res: Response) => {
         this.controller.createContact(req, res)
     })

     router.put('/', (req: Request, res: Response) => {
        res.send('Hello World')
    })

    router.delete('/:id', (req: Request, res: Response) => {
        const id: number = Number(req.params.id)
        //this.contacts.splice(id, 1)


        //res.send(this.contacts)
    })


     return router
    }
}