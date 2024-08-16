import { useState, FormEvent } from "react"

export default function NewCourseForm() {

  const [instructor, setInstructor] = useState('')
  const [code, setCode] = useState('');
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [hook, setHook] = useState('');
  const [image, setImage] = useState('');
  const [location, setLocation] = useState('');
  const [price, setPrice] = useState('');
  const [unwagedDiscount, setUnwagedDiscount] = useState('')
  const [category, setCategory] = useState('');

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="code">Code</label>
        <input id="code" type="text" value={code} onChange={(e) => setCode(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="subtitle">Subtitle</label>
        <input id="subtitle" type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="instructor">Instructor</label>
        <select value={instructor}>
          <option value="BT">Benjamin Tobias</option>
          <option value="MBS">Michael Burton-Smith</option>
          <option value="TN">Todd Nachowitz</option>
        </select>
      </div>
      <div>
        <label htmlFor="hook">Hook</label>
        <input id="hook" type="text" value={hook} onChange={(e) => setHook(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="image">Image</label>
        <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input id="location" type="text" value={location} onChange={(e) => setLocation(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="price">Price</label>
        <input id="price" type="text" value={price} onChange={(e) => setPrice(e.target.value)}></input>
      </div>
      <div>
        <label htmlFor="discount">Unwaged Discount</label>
        <select id="discount" value={unwagedDiscount}>
          <option value="0.10">10%</option>
          <option value="0.20">20%</option>
          <option value="0.25">25%</option>
          <option value="0.50">50%</option>
        </select>
      </div>
      

      <div>
        <label htmlFor="category">Category</label>
        <select id="category" value={category}>
          <option value="art-and-architecture">Art & Architecture</option>
          <option value="environment-and-biodiversity">Environment & Biodiversity</option>
          <option value="health-and-wellbeing">Health & Wellbeing</option>
          <option value="history">History</option>
          <option value="language">Language</option>
          <option value="philosophy">Philosophy</option>
          <option value="professional-development">Professional Development</option>
          <option value="religious-diversity">Religious Diversity</option>
          <option value="world-cinema">World Cinema</option>
          <option value="world-literature">World Literature</option>
        </select>
      </div>
    </form>
  )
}