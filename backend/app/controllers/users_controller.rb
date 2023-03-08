class UsersController < ApplicationController

    
    def index
        users = User.all

        render json: users
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user, except: [:password_digest]
        else
            render json: user.errors.full_messages
        end
    end

    def edit

    end

    def update

    end

    def destroy
        user = user.find_by(id: params[:id])
        user.destroy
    end

    private
    def user_params
        params.require(:user).permit(:username, :email, :password, :admin?)
    end

end
