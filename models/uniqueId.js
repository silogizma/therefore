// todo:
// don't use math.random for unique id
// i hope i won't forget fixing this
export default id => id || Date.now().toString();
