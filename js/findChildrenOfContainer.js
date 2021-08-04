var children = document.querySelector('.thirdTask .third').children;
document.write(children + " ");

for (let i = 0; i < children.length; i++ ) {
    document.write(`children${i}: ` + children[i] +  children[i].textContent + "; ");
}
