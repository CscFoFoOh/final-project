
require 'spec_helper'

# This spec was generated by rspec-rails when you ran the scaffold generator.
# It demonstrates how one might use RSpec to specify the controller code that
# was generated by Rails when you ran the scaffold generator.
#
# It assumes that the implementation code is generated by the rails scaffold
# generator.  If you are using any extension libraries to generate different
# controller code, this generated spec may or may not pass.
#
# It only uses APIs available in rails and/or rspec-rails.  There are a number
# of tools you can use to make these specs even more expressive, but we're
# sticking to rails and rspec-rails APIs to keep things simple and stable.
#
# Compared to earlier versions of this generator, there is very limited use of
# stubs and message expectations in this spec.  Stubs are only used when there
# is no simpler way to get a handle on the object needed for the example.
# Message expectations are only used when there is no simpler way to specify
# that an instance is receiving a specific message.

describe UsersController, type: :request do
  include_context 'logged_in_user'

    
 describe "GET index" do
    it "gets a 200 response" do
      get "/api/users"
      expect(response.status).to eq(200)
    end
  end

  describe "GET show" do
    it "assigns all accesses as @accesses" do
      FactoryGirl.create(:user)
      get "/api/users/1"
      expect(response.status).to eq(200)
    end
  end

  describe "POST create" do
    
    it "gets a 422 response with no params" do
      post "/api/users/", {}, @auth_headers
      expect(response.status).to eq(422)
    end

    it "gets a 201 response with correct params" do
      @user = FactoryGirl.build(:user)
      post "/api/users/", {email: @user.email, password: @user.password, password_confirmation: @user.password, first_name: @user.first_name, last_name: @user.last_name, provider: @user.provider}, @auth_headers
      expect(response.status).to eq(201)
    end
  end

  describe "PUT update" do
    
    it "gets a 422 response for no user" do
      put "/api/users/#{@user.slug}", {email: @user.email, password: @user.password, password_confirmation: @user.email, first_name: @user.first_name, last_name: @user.last_name, provider: @user.provider}, @auth_headers
      expect(response.status).to eq(422)
    end

    it "gets a 201 response with correct params" do
      put "/api/users/#{@user.slug}", {email: @user.email, password: @user.password, password_confirmation: @user.password, first_name: @user.first_name, last_name: @user.last_name, provider: @user.provider}, @auth_headers
      expect(response.status).to eq(204)
    end
  end

  describe "Destroy user" do
    
    it "gets a 201 response with correct params" do
      @new_user = FactoryGirl.create(:confirmed_user)
      delete "/api/users/#{@new_user.slug}", {}, @auth_headers
      @test = User.find_or_create_by(id: @new_user.id)  
      expect(@test.persisted?).to eq(false)
    end
  end


end

