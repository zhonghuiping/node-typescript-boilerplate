import { Test, TestingModule } from "@nestjs/testing";
import { TravelPackageController } from "./travel-package.controller";
import { TravelPackageModule } from "./travel-package.module";

describe("TravelPackage Controller", () => {
	let controller: TravelPackageController;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			imports: [TravelPackageModule],
			controllers: [TravelPackageController]
		}).compile();

		controller = module.get<TravelPackageController>(TravelPackageController);
	});

	it("should be defined", () => {
		expect(controller).toBeDefined();
	});
});