import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import reminderService from "./services/ReminderService";
import NewReminder from './components/NewReminder';

function App() {
  // In TS the useState is a generic function
  // In JS when we call a function and we do not supply aurgument by defualt the undefined will be passed.
  // Thefore we pass the empty array
  // Note we do not always supply generic type argument like [loading, setLoadin] = useState(true)  this will be automatically
  // boolean.
  const [reminders, setReminders] = useState<Reminder[]>([]);

  // We want to make sure that this is going to be called just once therefore we supply the empty array.
  // We cannot have async function therefore we declary outside for the useEffect
  useEffect(() => {
    loadReminders();
  }, []);

  const loadReminders = async () => {
    const reminders = await reminderService.getReminders();
    setReminders(reminders);
  }

  const removeReminder = async (id: number) => {
    console.log(id);
    await reminderService.removeReminder(id);
    setReminders(reminders.filter(reminder => reminder.id !== id));
  }

  const addReminder = async (title: string) => {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  }

  return (
    <div className="App">
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
