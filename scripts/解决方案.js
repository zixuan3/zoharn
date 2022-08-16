const jjfaItems = $(".item");
const solutionItems = $(".solution-item");
let activeItem = 8;

for (let index = 1; index <= jjfaItems.length; index++) {
    jjfaItems.eq(index - 1).click(() => {
        console.log("clicked jjfa index:", index);
        jjfaItems.eq(activeItem - 1).removeClass("active");
        jjfaItems.eq(index - 1).addClass("active");

        solutionItems.eq(activeItem - 1).removeClass("active");
        solutionItems.eq(index - 1).removeClass("fade-in-animation fade-in-left fade-in-right");

        if (activeItem >= index) {
            // When click at current or previous items, use left fadein animation.
            setTimeout(() => {
                solutionItems.eq(index - 1).addClass("fade-in-animation fade-in-left active");
            }, 0);
        } else {
            // When click at next items, use right fadein animation.
            setTimeout(() => {
                solutionItems.eq(index - 1).addClass("fade-in-animation fade-in-right active");
            }, 0);
        }

        activeItem = index;
    })
}
