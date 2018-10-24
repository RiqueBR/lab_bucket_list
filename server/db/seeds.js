use bucket_list;
db.dropDatabase();

db.wishes.insertMany([
  {
    title: "sky diving",
    more_info: "I'd like to skydive before my 30s"
  },
  {
    title: "travel to every continet",
    more_info: "This will be tough but well worth it!"
  },
  {
    title: "visit an ethical safari",
    more_info: "I'd like to visit an animal friendly safari that looks after the well being of their own animals"
  }
]);
