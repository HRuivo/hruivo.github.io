<script lang="ts">
    import { page } from "$app/state";
    import { base } from "$app/paths";

    const tabs = [
        { label: "Intro", href: "/" },
        { label: "Resume", href: "/resume" },
        { label: "Projects", href: "/projects" },
    ];

    const isActive = (href: string) =>
        href === "/"
            ? page.route.id === "/"
            : page.params.page === href.slice(1);
</script>

<header class="site-header">
    <a class="identity" href={`${base}/`} aria-label="Portfolio home">
        <span class="mark" aria-hidden="true">&lt;/&gt;</span>
        <span>Hugo Ruivo</span>
    </a>

    <nav aria-label="Main navigation">
        {#each tabs as tab, index}
            <a
                href={tab.href === '/' ? `${base}/` : `${base}${tab.href}/`}
                class:active={isActive(tab.href)}
                aria-current={isActive(tab.href) ? "page" : undefined}
            >
                <span class="tab-number">0{index + 1}</span>
                {tab.label}
            </a>
        {/each}
    </nav>

    <!-- <a class="availability" href="mailto:hello@example.com">
        <span aria-hidden="true"></span>
        Available for work
    </a> -->
</header>
