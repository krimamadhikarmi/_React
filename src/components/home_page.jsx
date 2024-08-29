import Navbar from './navbar';

export default function Home() {
  var text = 'this is image';
  return (
    <>
      <Navbar title={"Main"}/>
      <h1> This is Home page</h1>
      <img src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" width={200} />
      <h1>Image:{text}</h1>
    </>
  );
}
