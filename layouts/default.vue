<template>
    <div>
        <Html lang="en-US">
            <Head>
                <Title>RestoAdvisor</Title>
                <Meta
                    name="description"
                    content="A great Restaurant Advisor"
                ></Meta>
                <Link rel="icon" href="/favicon.png"></Link>
            </Head>
        </Html>

        <Navbar />

        <main class="container py-5">
            <slot></slot>
        </main>
    </div>
</template>
