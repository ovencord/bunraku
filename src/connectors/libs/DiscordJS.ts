 
import type { NodeOption } from '../../Shoukaku.ts';
import { Connector } from '../Connector.ts';

export class DiscordJS extends Connector {
	// sendPacket is where your library send packets to Discord Gateway
	// Direct call to @ovencord/ws — zero abstraction, zero allocation
	public sendPacket(shardId: number, payload: any, _important: boolean): void {
		return this.client.ws.send(shardId, payload);
	}
	// getId is a getter where the lib stores the client user (the one logged in as a bot) id
	public getId(): string {
		return this.client.user.id;
	}
	// Listen attaches the event listener to the library you are using
	public listen(nodes: NodeOption[]): void {
		// Only attach to ready event once, refer to your library for its ready event
		this.client.once('clientReady', () => this.ready(nodes));
		// Attach to the raw websocket event, this event must be 1:1 on spec with dapi (most libs implement this)
		this.client.on('raw', (packet: any) => this.raw(packet));
	}
}
