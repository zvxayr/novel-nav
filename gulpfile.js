const gulp = require('gulp');
const webpack = require('webpack-stream');

function namedTask(name, data, task) {
    Object.defineProperty(task, 'name', { value: name });
    Object.defineProperty(task, 'data', { value: data });
    return task;
}

const TypescriptConfig = {
    stats: 'errors-only',
    node: {
        __dirname: false,
    },
    mode: process.env.ENV || 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader',
                    options: {
                        transpileOnly: true,
                        happyPackMode: true,
                    },
                },
            },
        ],
    },
};

const TypescriptFiles = [
    {
        src: './src/main/index.ts',
        target: 'electron-main',
        name: 'main',
        watch: ['./src/main/**/*.{ts,tsx}', './src/features/**/{listener,index}.{ts,tsx}'],
    },
    {
        src: './src/renderer/index.tsx',
        target: 'electron-renderer',
        name: 'renderer',
        watch: ['./src/renderer/**/*.{ts,tsx}'],
    },
    {
        src: './src/preload/index.ts',
        target: 'electron-preload',
        name: 'preload',
        watch: ['./src/preload/**/*.{ts,tsx}', './src/features/**/preload.{ts,tsx}'],
    },
];

const TypescriptTasks = TypescriptFiles.map((data) => {
    const { src, target, name } = data;
    return namedTask(name, data, () =>
        gulp
            .src(src)
            .pipe(
                webpack({
                    ...TypescriptConfig,
                    entry: { [name]: src },
                    target,
                })
            )
            .pipe(gulp.dest('out/'))
    );
});

const CopyFiles = [{ src: './src/index.html', name: 'html' }];

const CopyTasks = CopyFiles.map((data) => {
    const { src, name } = data;
    return namedTask(name, data, () => gulp.src(src).pipe(gulp.dest('out/')));
});

gulp.task('bundle', gulp.parallel(...TypescriptTasks));
gulp.task('copy', gulp.parallel(...CopyTasks));
gulp.task('build', gulp.parallel('bundle', 'copy'));

gulp.task('watch', () => {
    for (let task of TypescriptTasks) {
        task.data.watch.forEach((glob) => {
            gulp.watch(glob, task);
        });
    }
    for (let task of CopyTasks) {
        gulp.watch(task.data.src, task);
    }
});
