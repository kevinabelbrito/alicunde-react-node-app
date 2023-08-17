export interface ListItem {
    id: number;
    text: string;
}

export interface FormProps {
    addItem: (text: string) => void;
}

export interface ListProps {
    items: ListItem[];
    onDelete: (id: number) => void;
}
