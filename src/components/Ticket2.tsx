import { useState } from 'react'; 
import { Input } from '../components/ui/input'; 
import { Button } from '@/components/ui/button'; 
import { Textarea } from '@/components/ui/textarea'; 
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';

interface FaqItem { 
    question: string;
     category: string;
     }

const faqData: FaqItem[] = [
     { question: 'How do I set effective community guidelines?', category: 'Community Management' },
      { question: 'What are the contents are available in Dashboard', category: 'Dashboard' },
       { question: 'How can users update their profile information?', category: 'User Management' }, 
       { question: 'How do students register for courses?', category: 'Content Management' }, 
       { question: 'What are the courses are available', category: 'Course Management' },
        { question: 'How many students are available per batch?', category: 'Student Management' },
     ];

export default function FaqDashboard() { 
    const [title, setTitle] = useState('');
     const [description, setDescription] = useState(''); 
     const [category, setCategory] = useState('');

return ( 
<div className="flex h-screen bg-gradient-to-b from-blue-100 to-blue-300">
     <div className="w-2/3 p-6">
      <Input placeholder="Search" className="mb-4" />

<div className="bg-black text-white font-semibold px-4 py-2 rounded-md mb-4">
      <div className="grid grid-cols-2">
        <div>Categorie Name</div>
        <div>Categorie Name</div>
      </div>
    </div>

    <div className="space-y-3">
      {faqData.map((faq, index) => (
        <div
          key={index}
          className="flex justify-between items-center bg-white/30 backdrop-blur p-3 rounded-lg"
        >
          <div>{faq.question}</div>
          <div className="font-medium text-blue-900">{faq.category}</div>
        </div>
      ))}
    </div>
  </div>

  <div className="w-1/3 bg-white/30 backdrop-blur p-6 rounded-l-xl shadow-xl">
    <h2 className="text-lg font-bold mb-4">Add FAQ</h2>

    <Input
      placeholder="Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}