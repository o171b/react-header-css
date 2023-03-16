1. *{ `asterisck defines universal selector, this is good for setting the font and other stuff, and it applies to all the items around the page`
2.  padding: 0; `padding is a cushion around the page, it takes 4 values, top right left bottom`
3.  margin: 0;  `margin is the space between the elements`
4.  box-sizing: border-box; `think of it as a toy-box, the size of the toy-box doesnt change relative to the number of toys you put inside it`
  font-family: 'Phudu', cursive;
  font-family: 'Poppins', sans-serif;
7.  text-decoration: none; `it has other values such as striked out, underline etc`
8.  list-style: none; `it has other values such as dotted, decimals`
}

9. :root{ ` is a pseudo-class selector that targets the root element of an HTML document, which is typically the <html> element.`
10.  --bg-color: #222327; `double-dash means creating a custom css variable with the value being color`
  --text-color: #fff;
  --main-color: #7e4df0;
}

11. body{ `this targets the body of our page, that is all the contents of our page`
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);
}


12.  position: absolute; `position doesnt change when other elements change in the page.`
13.   width: 100%; `width of the page`
14.   top: 0;    `we want the navbar 0 distance from top`
15.   right: 0;  `we want the navbar 0 distance from right`
16.   z-index: 1000; `priority of the navbar, if we've another z-index: 1001, that element will be on top of the element with z-index:1000`
17.   display: flex; `is a container, its like having a special toy box that can make your elements fit perfectly , no matter how many toys or how big they are`
18.   align-items: center; `aligns the flex items to the center`
19.  justify-content: space-between; `puts even spaces between the items`
20.  background: transparent; `navigation blends with the background color of our page`
21.  padding: 28px 12%; `padding is like cushion around the element 28px to top bottom absolute, 12% relative to right and left`
22.  transition: all .50s ease; `transition All the navigation items in 0.50s and animation is ease`

.logo{
  display: flex;
  align-items: center;
}

.logo i{
  color: var(--main-color);
  font-size: 28px;
  margin-right: 3px;
}

.logo span{
  color: var(--text-color);
23.  font-size: 1.7rem; `rem is a unit of measurement, it stands for root em, eg: if root element has a font size of 16px then 1rem=16px, its relative to root elements font size Using rem units can be useful in making your website more responsive, as the font-size of the root element can be adjusted for different screen sizes and devices`
24.  font-weight: 600; `thickness of the font`
}

.navbar {
  display: flex;
}
.navbar a{
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 5px 0;
  margin: 0px 30px;
  transition: all .50s ease;
}
25. .navbar a:hover{ `hover is a pseudo selector`
  color: var(--main-color);
}
.navbar a.active{
  color: var(--main-color);
}

.main{
  display: flex;
  align-items: center;
}
.main a{
  margin-right: 25px;
  margin-left: 10px;
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
  transition: all .50s ease;
}

.user{
  display: flex;
  align-items: center;
}
.user i{
  color: var(--main-color);
  font-size: 28px;
  margin-right: 7px;
}

.main a:hover{
  color: var(--main-color);
}

#menu-icon{ `the three layered icon`
  font-size: 35px;
  color: var(--text-color);
26.  cursor: pointer; `type of mouse pointer when we point on that item`
  z-index: 1001;
27.  display: none; `we dont want it to show up all the time, only when we minimize the page it should show up`
}

28. @media (max-width: 1280px){ `this is called media query, here it is set to trigger when max width of the device screen is 1280px. So, any styles included within the media query will only apply when the screen width is equal to or less than 1280 pixels. For instance, a web designer might use this media query to adjust the layout of a webpage for smaller devices like tablets or mobile phones`
  header{
    padding: 14px 2%;
    transition: .2s;
  }
  .navbar a{
    padding: 5px 0;
    margin: 0px 20px;
  }
}

@media (max-width: 1090px){
#menu-icon{
    display: block;
  }
  .navbar{
    position: absolute;
    top: 100%;
    right: -100%;
    width: 270px;
    height: 39vh 0 0 39vh;
    background: var(--main-color);
    display: flex;
    flex-direction: column;
29. justify-content: flex-start; `Imagine you have a line of toys and you want to put them on a shelf. You can put them at the beginning of the shelf, so that the first toy is against the left edge, and the other toys are placed to the right of it with some space in between. Similarly, "justify-content: flex-start" tells a website's layout to put things at the beginning of a container, which is usually the left side. This is useful for arranging things in a row, like navigation links or buttons, and keeping them all together at the start of a row.`
30.    border-radius: 10px; `makes the border edges rounded `
    transition: all .50s ease;
  }
  .navbar a{
    display: block;
    margin: 12px 0;
    padding: 0px 25px;
    transition: all .50s ease;
  }
  .navbar a:hover{
    color: var(--text-color);
31.    transform: translateY(5px); `The "translateY" function is used to specify the amount of vertical movement. In this case, "translateY(5px)" means that the element will be moved 5 pixels down from its original position.`
  }
  .navbar a.active{
    color: var(--text-color);
  }
  .navbar.open{
    right: 2%;

  }
}