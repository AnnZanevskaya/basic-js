 module.exports = function createDreamTeam(members) {
   if (!Array.isArray(members)) {
     return false;
   }

   var filteredMembers = members.filter(f => isString(f));

   var membersFirstLetters = filteredMembers.map(function (member) {
     return member.replace(/ /g, '').toUpperCase().split("")[0];
   });

   return membersFirstLetters.sort().join("");
 };

 function isString(value) {
   return typeof value === 'string' || value instanceof String;
 }