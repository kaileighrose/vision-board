class User < ActiveRecord::Base
  has_secure_password
  has_many :resources
  has_many :boards

  @@current_user = nil

  def self.current_user
    @@current_user
  end

  def self.current_user=(current_user)
    @@current_user = current_user
  end

  
end
