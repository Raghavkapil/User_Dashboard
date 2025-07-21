import { useEffect, useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { HeadContext } from '../Components/Context';
import './UserDetails.scss';

export default function UserDetails() {
  const { setHeading } = useContext(HeadContext);

  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [tab, setTab] = useState('posts');

  useEffect(() => {
    const fetchData = async () => {
      const userRes = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      const postsRes = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
      const albumsRes = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${id}`);
      setUser(userRes.data);
      setPosts(postsRes.data);
      setAlbums(albumsRes.data);
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    setHeading('User Details');
  }, [user, setHeading]);

  if (!user) return <div className="text-center mt-8">Loading...</div>;

  return (
    <div className="p-4">
      <button onClick={() => navigate('/')} className="backBtn btn btn-outline mb-4"><p className="my-1">← Back to List</p></button>

      <div className="flex-row card userCard bg-base-200 p-4 mb-6">
        <div className=" card-body userCard-body flex-row">
          <div className="content-center" >
            <img
              loading="lazy"
              src="/Img.png"
              alt="Profile"
              className=" object-cover rounded-lg aspect-square h-20"
            />
          </div>
          <div className='flex-col'>
            <h2 className="card-title">{user.name}</h2>
            <p><b>Email:</b> {user.email}</p>
            <p><b>Phone:</b> {user.phone}</p>
            <p><b>Address:</b> {user.address.street}, {user.address.city}</p>
            <p><b>Company:</b> {user.company.name}</p>
          </div>
        </div>
      </div>
      <div role="tablist" className="tabs tabs-boxed mb-4 ">
        <a role="tab" className={`mr-4 btn py-1 tab ${tab === 'posts' && 'tab-active btn-active'}`} onClick={() => setTab('posts')}>Posts</a>
        <a role="tab" className={`btn py-1 tab ${tab === 'albums' && 'tab-active btn-active'}`} onClick={() => setTab('albums')}>Albums</a>
      </div>
      <div className="">
        <div className="space-y-2 post-album">
          {tab === 'posts' && posts.map(post => (
            <div key={post.id} className="p-4 bg-base-100 rounded shadow post">
              <h3 className="font-semibold">{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))}
          {tab === 'albums' && albums.map(album => (
            <div key={album.id} className="p-4 bg-base-100 rounded shadow album">
              <p>{album.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
