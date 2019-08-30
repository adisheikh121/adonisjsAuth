'use strict'
const Logger = use('Logger')
class AuthController {

    async getLogin({ view,auth }) {
       
        try {
            await auth.check()
             //return response.route('profile')
            return view.render('profile')
          } catch (error) {
            
            return view.render('login')
          }

    }
  
    async postLogin({ request, response, auth }) {
      const { email, password } = request.all()
       return   await auth.attempt(email, password);
   
      return response.route('profile')
    }
  
    async postLogout({ auth, response }) {
      await auth.logout()
      return response.route('/')
    }
  
    async getProfile({ auth, view }) {

        try {
            return await auth.getUser()
          } catch (error) {
            response.send('You are not logged in')
          }

      
    
    }
  
  }
  
  module.exports = AuthController
