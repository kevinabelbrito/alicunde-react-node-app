import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'

interface ListItem {
  id: number;
  text: string;
}

const App: React.FC = () => {

  const [items, setItems] = useState<ListItem[]>([]);

  const handleAddItem = (text: string) => {
    const newItem: ListItem = {
      id: Date.now(),
      text: text,
    };
    setItems([...items, newItem]);
  };

  const handleDeleteItem = (id: number) => {
    const question = confirm("Do you want to delete this hobbie?");
    if (!question) {
      return;
    }
    const updatedList = items.filter(item => item.id !== id);
    setItems(updatedList);
  };

  return (
    <>
      <Form
        addItem={handleAddItem}
      />
      <List 
        items={items}
        onDelete={handleDeleteItem}
      />
    </>
  )
}

export default App
