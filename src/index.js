const arr = [
  {
    id: 3,
    startTime: 110,
    endTime: 150,
  },
  {
    id: 2,
    startTime: 0,
    endTime: 120,
  },

  {
    id: 1,
    startTime: 180,
    endTime: 220,
  },
];

const handler = (input, duration) => {
  let start = 0;
  let end = 0;

  for (let i = 0; i < input.length; i++) {
    let flag = true;
    if (input[i].startTime >= input[i].endTime)
      return console.log("The start time is always less than the end time!");
    start = input[i].endTime;
    end = input[i].endTime + duration;
    for (let j = i + 1; j < input.length; j++) {
      if (
        (end >= input[j].startTime && end <= input[j].endTime) ||
        (start >= input[j].startTime && start <= input[j].endTime)
      ) {
        // return console.log("Blocked time!");
        flag = false;
        continue;
      } else if (
        (end >= input[j].startTime && end >= input[j].endTime) ||
        (start >= input[j].startTime && start >= input[j].endTime)
      ) {
        flag = false;
        continue;
      }
    }
    return console.log({ startTime: start, endTime: end });
  }
};

handler(arr, 30);
