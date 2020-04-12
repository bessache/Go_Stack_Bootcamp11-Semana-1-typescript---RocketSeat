import {Request, Response} from 'express';
import createUser from './services/CreateUser'


export function helloworld(request:Response, response:Response){
  const user = createUser({
    email: 'diego@Image.com.br',
    password: '123456',
    techs:[
      'Node.js',
      'ReactJS', 
      'React Native',
      {title: 'Javascript', experience:100},
    ],
  });
  return response.json({message:'Heloo World'});
}