import data from '../data.json';

interface Restaurant {
    id: number;
    rank: number;
    name: string;
    content: string;
    revenue: number;
    numberOfStores: number;
    imageUrl: string;
}

const all = ref<Restaurant[]>(data as any);

const cols = computed(() => {
    return {
        first: all.value.slice(0, 25),
        second: all.value.slice(25, 50),
    };
});

// todo: fix issue Hydration mismatch!
// const selectedName = computed(() => useRoute().params.name as string);

// const selected = computed(() =>
//     all.value.find((r) => r.name === selectedName.value)
// );

const findByName = (name: string) => all.value.find((r) => r.name === name);

export default function () {
    return {
        all,
        cols,
        findByName,
    };
}
