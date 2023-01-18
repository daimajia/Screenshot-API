import { Test } from '@nestjs/testing'
import { AppController } from './app.controller'
import { AppService } from './app.service'

describe('AppController', () => {
	let appController

	beforeEach(async () => {
		const app = await Test.createTestingModule({
			controllers: [AppController],
			providers: [AppService]
		}).compile()

		appController = app.get(AppController)
	})

	describe('/v1/status', () => {
		//

		test('GET', () => {
			expect(appController.getStatus()).toEqual({ status: 'ok' })
		})
	})

})
