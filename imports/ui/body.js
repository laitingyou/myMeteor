import { Template } from 'meteor/templating';
import './body.html';
import { Tasks } from '../api/task.js';
Template.body.helpers({
  tasks(){
  	return Tasks.find()
  },
  value:12
});   
Template.body.events({
	'input input'(e){
		console.log(Tasks.find({}))
		console.log(e.target.value)
		// Tasks.insert( {
  //    		 _id: 'my-todo'
  //  		 });
  Tasks.update('_id', {$set: e.target.value});
	}
})