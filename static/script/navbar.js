function navItem({ id, link, label, dropDown }) {
    if (dropDown) {
        const item = $(`<li class="nav-item dropdown" id="_i${id}"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">${label}</a></li>`);
        const linklist = $('<ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink"></ul>');
        link.forEach(item => {
            linklist.append(`<li id="nav_list_i${item.id}"><a class="dropdown-item link-primary" href="#" onclick="itemClick('${item.link}')">${item.label}</a></li>`);
        });
        return item.append(linklist);
    } else {
        const item = $(`<li class="nav-item" id="nav_i${id}"><a class="nav-link link-primary" href="#" data-link="${link}">${label}</a></li>`);
        return item;
    }
}

/*

<li class="nav-item link-primary">
    <a class="nav-link" href="#">Features</a>
</li>
------------------
<li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
        data-bs-toggle="dropdown" aria-expanded="false">
        Dropdown link
    </a>
    <ul class="dropdown-menu bg-dark" aria-labelledby="navbarDropdownMenuLink">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</li>

*/