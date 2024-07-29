import { useState, useEffect } from 'react';
import { getSession } from '@session';

const categories = ['Category 1', 'Category 2', 'Category 3'];

interface Server {
    id: string;
    name: string;
}

export default async function ServerForm(){
  const [servers, setServers] = useState<Server[]>([]);
  const [selectedServer, setSelectedServer] = useState<Server | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState(categories[0]);
  const [tags, setTags] = useState<string[]>(['']);
  
  useEffect(() => {
    const fetchServers = async () => {
      const session = await getSession();
      if (session) {
        const response = await fetch('/api/servers');
        const data = await response.json();
        setServers(data);
      }
    };

    fetchServers();
  }, []);

  const handleTagChange = (index: number, value: string) => {
    const newTags = [...tags];
    newTags[index] = value;
    setTags(newTags);
  };

  const handleAddTag = () => {
    if (tags.length < 5) {
      setTags([...tags, '']);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="server">Select Server:</label>
      <select
        id="server"
        onChange={(e) => {
          const server = servers.find(s => s.id === e.target.value);
          setSelectedServer(server || null);
        }}
      >
        <option value="">Select a server</option>
        {servers.map((server) => (
          <option key={server.id} value={server.id}>
            {server.name}
          </option>
        ))}
      </select>

      {selectedServer && (
        <>
          <div>
            <label htmlFor="name">Server Name:</label>
            <input type="text" id="name" value={selectedServer.name} readOnly />
          </div>

          <div>
            <label htmlFor="description">Server Description (Markdown):</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div>
            <label htmlFor="category">Category:</label>
            <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label>Tags:</label>
            {tags.map((tag, index) => (
              <input
                key={index}
                type="text"
                value={tag}
                onChange={(e) => handleTagChange(index, e.target.value)}
              />
            ))}
            {tags.length < 5 && <button type="button" onClick={handleAddTag}>Add Tag</button>}
          </div>
        </>
      )}

      <button type="submit">Submit</button>
    </form>
  );
};