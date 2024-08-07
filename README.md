<h1>React Space Travel</h1>
An interactive game written in React.JS with a mock API that alters the data in local storage, where users act as a space commander who saves survivors from Earth's unhabitable enviroment. 

<h2>Description</h2>
This web application's users are commanders who will create and launch spacecrafts to evacuate humankind from the Earth. 
Users have the ability to veiw a list of spacecrafts, see the details of a spacecraft, build a new one, and destroy the old one. 
But the capabilities of it continue beyond that as well; users may view planets with the spacecraft on it and send a spacecraft from one planet to another to transfer people. 

<h2>How to Play</h2>
There are three available tabs in the navbar: Home, Spacecrafts, and Planets. 

<img width="1437" alt="image" src="https://github.com/user-attachments/assets/96378ec9-f028-4f56-ac91-f385f7d3bf2c">

  ````diff
@@ HOME @@
````
Users may read the introduction to the game which tells: 
<ul>
    <li>The scene of how Earth in inhabitable in the future from human neglect to the enviorment.</li>
    <li>Their role as commander engineer with the mission of building spacecrafts to send survivors to other planets.</li>
    <li>How they can build, destroy, and launch spacecrafts as they please.</li>
</ul>

  ````diff
@@ SPACECRAFTS @@
````
Where the user, as commander engineer, may build, destroy, and veiw individual spacecrafts. A default spacecraft named "Prispax" is provided, but may be deleted. 
<h4>Building Spacecrafts</h4>
<ol>
    <li>Press the "Build a Spacecraft" button to pop up the form to build your spacecraft.</li>
    <li>The "Name" of your spacecraft is what it will be called.</li>
    <li>The "Capacity" is how many humans the spacecraft can hold.</li>
    <li>The "Description" is the extra information that can be veiwed when clicking on the spacecraft from the spacecrafts tab.</li>
    <li>The "Picture URL" will need any image URL from the internet.</li>
    <li>Press the "Build" button when finished.</li>
    <li>Press the "back" button to veiw your spacecraft.</li>
</ol>

<h4>Veiwing a Spacecraft</h4>
<ol>
    <li>Click on the image of the spacecaft.</li>
    <li>Veiw the info such as the given name, capacity, and description. Also veiw the destroy option.</li>
    <li>Hit the "back" button to return to the spacecrafts list.</li>
</ol>

<h4>Destroying a Spacecraft</h4>
There are two ways to destory a spacecraft. 
<ul>
    <li>From the list of all spacecrafts, simply hit the destroy button.</li>
    <li>After clicking on an individual spacecraft, hit the destory button.</li>
</ul>

  ````diff
@@ PLANETS @@
````
The user may launch spacecrafts to any of the planets! All spacecrafts first start on planet Earth.

<h4>Launching a spacecraft</h4>
<ul>
    <li>First click on the image of the spacecraft you wish to move.</li>
    <li>Then click the image of the planet of your choosing.</li>
</ul>







