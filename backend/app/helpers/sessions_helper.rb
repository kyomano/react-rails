module SessionsHelper

    def login!
        session[:user_id] = user.id
    end

    def logged_in?
        !!session[:user_id]
    end

    def current_user
        if (user.id = session[:user_id])
            current_user ||= User.find_by(id: user_id)
        elsif (user_id = cookies.signed[:user_id])
            user = User.find_by(id: user_id)

            if user && user.authenticated?(cookies[:remember_token])          
                current_user = user
            end
        end
    end

    def authorized_user?
         user == current_user
    end

    def logout!
         session.clear
    end

end