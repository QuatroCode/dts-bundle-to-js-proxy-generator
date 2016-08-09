// Generated by dts-bundle v0.4.3

declare module 'example-lib' {
    import Hello from 'example-lib/hello';
    import World from 'example-lib/world';
    export default Hello;
    export { World };
}

declare module 'example-lib/hello' {
    export default class Hello {
        SayHello(name: string): void;
    }
}

declare module 'example-lib/world' {
    export default class World {
        Spin(): void;
        Stop(): void;
    }
}
