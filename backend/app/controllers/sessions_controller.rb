class SessionsController < ApplicationController

    def create
        user = User.find_by(email: session_params[:email])
        
        if user && user.authenticate(session_params[:password])
            session[:user_id] = user.id
            
            render json: {
                user: user
            } 
        else
            render json: {
                status: 401,
                errors: ['User not found.', 'Verify credentials and try again, or sign up']
            }
        end
    end

    def is_logged_in?
        if current_user
          render json: {
            logged_in: true,
            user: current_user
          }
        else
          render json: {
            logged_in: false,
            message: 'no such user'
          }
        end
    end

    def destroy
        logout!
        render json: {
          status: 200,
          logged_out: true
        }
    end

    private
    
    def session_params
        params.require(:user).permit(:username, :email, :password)
      end
end
