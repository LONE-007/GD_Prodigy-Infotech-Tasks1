/*<script>
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 0);
    });
</script>*/
<script>
    document.addEventListener('DOMContentLoaded', function() {
        const indigoSection = document.getElementById('indigo');

        document.querySelector('a[href="#indigo"]').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default anchor behavior
            indigoSection.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling

            // Add the glowing effect
            indigoSection.classList.add('glowing');

            // Remove the glowing effect after a few seconds
            setTimeout(function() {
                indigoSection.classList.remove('glowing');
            }, 3000); // 3 seconds duration
        });
    });
</script>