import Header from '../components/Header';

export default function Choice() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <Header userExisting={user}/>
  );
}
