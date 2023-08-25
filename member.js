function skillsMember() {
  var member = {
    name: 'John Doe',
    age: 34,
    skills: ['HTML', 'CSS', 'JS'],
    addSkill: function (skill) {
      this.skills.push(skill);
    },
    removeSkill: function (skill) {
      this.skills = this.skills.filter(function (s) {
        return s !== skill;
      });
    },
  };
  return member;
} 