module.exports.run = async (client) => {
  console.log(`${client.user.tag} has logged in.`);
  client.user.setActivity(`${client.projectsSize} Server | Made By Devansh`, {
    type: "WATCHING",
  });
};
