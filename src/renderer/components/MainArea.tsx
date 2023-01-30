import React, { useRef, useState } from 'react';
import styled from 'styled-components';

const HorizontalResizer = styled.div`
    background-color: var(--color-text);
    cursor: e-resize;
    opacity: 0.05;
    width: 1px;
    &:hover,
    .is-child-resizing-h &.resizing {
        opacity: 0.2;
        scale: 3 1;
    }
`;

const Main = styled.div`
    background-color: var(--color-background);
    color: var(--color-text);
    display: grid;
    grid-area: main;
    grid-template-areas: 'nav . doc . res';
    grid-template-columns: min-content 1px 1fr 1px min-content;
    &.is-child-resizing-h {
        cursor: col-resize;
        user-select: none;
    }
`;

const NavPanel = styled.div`
    display: flex;
    grid-area: nav;
    max-width: 30vw;
    min-width: 148px;
`;

const WorkArea = styled.div`
    grid-area: doc;
    height: 100%;
    min-height: 0;
    min-width: 0;
    overflow-y: auto;
    width: 100%;
`;

const Results = styled.div`
    grid-area: res;
    max-width: 30vw;
    min-width: 148px;
`;

const useResize = (navRef: React.RefObject<HTMLDivElement>, resRef: React.RefObject<HTMLDivElement>) => {
    const [navWidth, setNavWidth] = useState(0);
    const [resWidth, setResWidth] = useState(0);
    const [isResizing, setIsResizing] = useState(false);
    const [resizingType, setResizingType] = useState<'nav' | 'res' | null>(null);

    const prepareResize: (type: 'nav' | 'res') => React.MouseEventHandler<HTMLDivElement> = (type) => (_) => {
        setResizingType(type);
        setIsResizing(true);
    };

    const resize = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isResizing) return;

        if (resizingType === 'nav') {
            setNavWidth(e.clientX - navRef.current?.getBoundingClientRect().left);
        } else if (resizingType === 'res') {
            setResWidth(resRef.current?.getBoundingClientRect().right - e.clientX);
        }
    };

    const finishResize = () => {
        setIsResizing(false);
        setResizingType(null);
    };

    return { navWidth, resWidth, isResizing, resizingType, prepareResize, resize, finishResize };
};

export const MainArea = () => {
    const navRef = useRef<HTMLDivElement>(null);
    const resRef = useRef<HTMLDivElement>(null);
    const { navWidth, resWidth, isResizing, resizingType, prepareResize, resize, finishResize } = useResize(
        navRef,
        resRef
    );

    const isChildResizingH = isResizing ? 'is-child-resizing-h' : '';
    const navClass = resizingType === 'nav' ? 'resizing' : '';
    const resClass = resizingType === 'res' ? 'resizing' : '';
    return (
        <Main onMouseMove={resize} onMouseUp={finishResize} className={isChildResizingH}>
            <NavPanel ref={navRef} style={{ width: `${navWidth}px` }}></NavPanel>
            <HorizontalResizer onMouseDown={prepareResize('nav')} className={navClass} />
            <WorkArea />
            <HorizontalResizer onMouseDown={prepareResize('res')} className={resClass} />
            <Results ref={resRef} style={{ width: `${resWidth}px` }}></Results>
        </Main>
    );
};
