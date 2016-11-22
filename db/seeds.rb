# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user = User.create(username: 'kaileigh', password: 'testing2')
user2 = User.create(username: 'testy1', password: 'testy1')
resources = []
resources2 = []
5.times do 
  resources << Resource.create(name: Faker::Hipster.sentence(3), kind: 'idea', item: Faker::Hipster.sentence(6), user_id: user.id)
end

5.times do
  resources2 << Resource.create(name: Faker::Hipster.sentence(3), kind: 'idea', item: Faker::Hipster.sentence(6), user_id: user2.id)
end

5.times do 
  Board.create(board: Faker::Hipster.word, resources: resources)
  Board.create(board: Faker::Hipster.word, resources: resources2)
end
