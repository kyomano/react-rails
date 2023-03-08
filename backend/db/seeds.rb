# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

User.create(email: "ty.huff24@gmail.com", password: "eec141619.", username: "t.huff")

5.times do
    Blog.create(title: Faker::Lorem.words(number: 3).join(" "), content: Faker::Lorem.paragraph_by_chars(number: 256))
end
