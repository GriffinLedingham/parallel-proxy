import { ParallelCard } from '../parallel/parallelCard';
import { layoutNormal } from './layout-normal';

export function cardTemplate(card: ParallelCard) {
    return layoutNormal(card);
}
