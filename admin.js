const { kafka } = require("./client");
async function init() {
  const admin = kafka.admin();
  console.log("Admin connecting...");
  admin.connect();
  console.log("Admin connecting success..");

  console.log("Creating Topics [rider-updates]");
  await admin.createTopics({
    topics: [
      {
        topic: "rider-updates",
        numPartitions: 2,
      },
    ],
  });
  console.log("Topic created success [rider-updates]");

  console.log("Disconnecting Admin...");
  await admin.disconnect();
}
init();
