eric = Teacher.create(name: "Eric", subject: "Physical Education")

dodgeball = Classroom.create(name: "Dodgeball", teacher: eric)
Assignment.create(name: "If you can dodge a wrench", classroom: dodgeball)

cardio = Classroom.create(name: "Cardio", teacher: eric)
# eric.classrooms.create(name: "Cardio")
Assignment.create(name: "Run this 💩 like cardio", classroom: cardio)



ethan = Teacher.create(name: "Ethan", subject: "Nuclear Chemistry")

chem = ethan.classrooms.create(name: "Nuclear Chemistry 909")

Assignment.create(name: "Space Chemistry", classroom: chem)
Assignment.create(name: "Rocket Surgery Chemistry", classroom: chem)
