export interface AppState {
  equipment: EquipmentItem[];
  networkNodes: NetworkNode[];
  filters: {
    type: string | null;
    status: string | null;
  };
  lastUpdated: number; // Timestamp of the last update
}

export interface EquipmentItem {
  id: number;
  name: string;
  status: "Available" | "In Use" | "Maintenance"; // Example statuses
  location: string; // Location of the equipment
  coords: [number, number]; // Timestamp of the last update
}

export interface NetworkNode {
  id: string;
  type: "4G" | "5G";
  status: "Online" | "Offline"; // Example statuses
  region: string; // Region where the node is located
  coords: [number, number]; // Coordinates of the node
}

export type AppAction =
  | { type: "SET_EQUIPMENT"; payload: EquipmentItem[] }
  | { type: "SET_NODES"; payload: NetworkNode[] }
  | { type: "SET_FILTERS"; payload: FilterPayload }
  | { type: "UPDATE_TIMESTAMP"; payload: number };

export interface FilterPayload {
  type: string | null;
  status: string | null;
}
