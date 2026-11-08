<script lang="ts">
    const socials = [
        { label: "Gitlab", href: "https://gitlab.com/Huruborus" },
        { label: "GitHub", href: "https://github.com/HRuivo" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/hruivo89/" },
    ];
</script>

<footer>
    <p>© {new Date().getFullYear()} · Hugo Ruivo</p>
    <nav class="social-links" aria-label="Social links">
        {#each socials as social}
            <a href={social.href} target="_blank" rel="noreferrer">
                {social.label}
                <span aria-hidden="true">↗</span>
            </a>
        {/each}
    </nav>
</footer>
