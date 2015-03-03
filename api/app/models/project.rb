class Project < ActiveRecord::Base
  belongs_to :user
  has_many :comments
  has_many :memberships
  has_many :users, through: :memberships
end