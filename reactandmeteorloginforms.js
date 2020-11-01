meteor add accounts-password
meteor npm install --bcrypt

import task from "imports/api/tasks"

Meteor.startup(() => {
  if (!Accounts.findUserByUsername('Benjamin Miller')) {
    Accounts.createUser({
      username: 'Benjamin Miller',
      password: 'password'
    });
  }

  if (Tasks.find().count() === 0) {
    [
      'First Task',

      import React, { useState } from 'react';

      export const LoginForm = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const submit = (e) => {
          e.preventDefault();

          Meteor.loginWithPassword(username, password);
        };

        return (
          <form onSubmit={submit} className="login-form">
            <label htmlFor="username">Username</label>

            <input
                type="text"
                placeholder="Username"
                name="username"
                required

                onChange={(e) => setUsername(e.currentTarget.value)}
            />

            <label htmlFor="password">Password</label>

            <input
                type="password"
                placeholder="Password"
                name="password"
                required

                onChange={(e) => setPassword(e.currentTarget.value)}
            />

            <button type="submit">Log In</button>
          </form>
        );
      };
      import { Task } from './Task';
import Tasks from '/imports/api/tasks';
import { TaskForm } from './TaskForm';
import { LoginForm } from './LoginForm';

const toggleChecked = ({ _id, isChecked }) => {
  Tasks.update(_id, {
...some lines skipped...
    _.set(filter, 'checked', false);
  }

  const { tasks, incompleteTasksCount, user } = useTracker(() => ({
    tasks: Tasks.find(filter, { sort: { createdAt: -1 } }).fetch(),
    incompleteTasksCount: Tasks.find({ checked: { $ne: true }}).count(),
    user: Meteor.user(),
  }));

  if (!user) {
    return (
      <div className="simple-list-react">
        <LoginForm/>
      </div>
    );
  }

  return (
    <div className="simple-list-react">
      <h1>List ({ incompleteTasksCount })</h1>
      simple-list-react .task-form input {
        flex-grow: 1;
      }

      .simple-list-react .login-form {
        margin-top: 2rem;
      }

      .simple-list-react .login-form label,
      .simple-list-react .login-form input {
        display: block;
        width: 100%;
        box-sizing: border-box;
      }

      .simple-list-react .login-form label {
        margin-bottom: .4rem;
      }

      .simple-list-react .login-form input {
        margin-bottom: .8rem;
      }

      .simple-list-react .login-form button[type=submit] {
        float: right;
      }
      port React, { useState } from 'react';
import Tasks from '/imports/api/tasks';

export const TaskForm = ({ user }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
...some lines skipped...

    Tasks.insert({
      text: text.trim(),
      createdAt: new Date(),
      owner: user._id,
    });

    setText("");
    />) }
  </ul>

  <TaskForm user={user}/>
</div>
);
};
